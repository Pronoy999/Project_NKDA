package com.pm.estrello.smarttoilet;

import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.telephony.SmsMessage;
import android.util.Log;

import androidx.annotation.RequiresApi;
import androidx.core.app.NotificationCompat;

public class SmsReciver extends BroadcastReceiver {
    private String TAG_SMS = "pdus";
    private final String CLASS_TAG = SmsReciver.class.getSimpleName();

    @RequiresApi(api = Build.VERSION_CODES.M)
    @Override
    public void onReceive(Context context, Intent intent) {
        Bundle bundle = intent.getExtras();
        SmsMessage[] smsMessages;
        String format = bundle.getString("format");
        if (bundle != null) {
            Object[] pdus = (Object[]) bundle.get(TAG_SMS);
            if (pdus != null) {
                smsMessages = new SmsMessage[pdus.length];
                boolean isVersionGreaterM = Build.VERSION.SDK_INT >= Build.VERSION_CODES.M;
                for (int i = 0; i < smsMessages.length; i++) {
                    if (isVersionGreaterM) {
                        smsMessages[i] = SmsMessage.createFromPdu((byte[]) pdus[i], format);
                    } else {
                        smsMessages[i] = SmsMessage.createFromPdu((byte[]) pdus[i]);
                    }
                    String toastMessage = smsMessages[i].getOriginatingAddress() +
                            " : " +
                            smsMessages[i].getMessageBody() + "\n";
                    if (toastMessage.contains("Ammonia")) {
                        createNotification();
                    }
                    Log.d(CLASS_TAG, toastMessage);
                }
            }
        } else {
            Log.d(CLASS_TAG, "BUNDLE IS NULL");
        }
    }

    @RequiresApi(api = Build.VERSION_CODES.M)
    private void createNotification() {
        Context context = SmartToiletApp.getInstance();
        Intent intent = new Intent(context, ToiletMasterActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        PendingIntent pendingIntent = PendingIntent.getActivity(context, 0, intent, 0);
        NotificationCompat.Builder builder = new NotificationCompat.Builder(context, "1")
                .setSmallIcon(R.drawable.user_login)
                .setContentTitle("New Alert!")
                .setContentIntent(pendingIntent)
                .setContentText("A toilet is breaching ammonia level")
                .setPriority(NotificationCompat.PRIORITY_DEFAULT);
        NotificationManager notificationManager = (NotificationManager)
                context.getSystemService(Context.NOTIFICATION_SERVICE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            NotificationChannel channel = new NotificationChannel("1", "Smart Toilet",
                    NotificationManager.IMPORTANCE_DEFAULT);

            if (notificationManager != null) {
                notificationManager.createNotificationChannel(channel);
            } else {
                Log.e(TAG_SMS, "Notification manager NULL");
            }
        }
        if (notificationManager != null) {
            notificationManager.notify(1, builder.build());
        } else {
            Log.e(TAG_SMS, "Notification manager NULL");
        }
    }
}
