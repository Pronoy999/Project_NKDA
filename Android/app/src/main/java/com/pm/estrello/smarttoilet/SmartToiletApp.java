package com.pm.estrello.smarttoilet;

import android.app.Application;
import android.util.Log;

public class SmartToiletApp extends Application {
    private static SmartToiletApp instance;

    @Override
    public void onCreate() {
        super.onCreate();
        instance = this;
        Log.d(SmartToiletApp.class.getSimpleName(), "Application created.");
    }

    public static SmartToiletApp getInstance() {
        return instance;
    }
}
