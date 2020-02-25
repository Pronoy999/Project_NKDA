package com.pm.estrello.smarttoilet;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private EditText _email, _password;
    private Button _login, _exit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setTitle("Login");
        initializeViews();
        _login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (isNotEmpty()) {
                    if (validateLogin()) {
                        changeActivity();
                    } else {
                        reset();
                    }
                }
            }
        });
        _exit.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                reset();
            }
        });
    }

    /**
     * Method to initialize views.
     */
    private void initializeViews() {
        _email = findViewById(R.id.EmailId);
        _password = findViewById(R.id.password);
        _login = findViewById(R.id.loginButton);
        _exit = findViewById(R.id.exitButton);
    }

    private void reset() {
        _email.getText().clear();
        _password.getText().clear();
    }

    /**
     * Method to check whether the edit texts are empty or not.
     *
     * @return true if NOT Empty, else false.
     */
    private boolean isNotEmpty() {
        return !TextUtils.isEmpty(_email.getText()) && !TextUtils.isEmpty(_password.getText());
    }

    /**
     * Method to validate Login.
     *
     * @return true if Valid else false.
     */
    private boolean validateLogin() {
        //String email = _email.getText().toString();
        String password = _password.getText().toString();
        return password.equalsIgnoreCase("abcd");
    }

    /**
     * Method to change the activity.
     */
    private void changeActivity() {
        startActivity(new Intent(MainActivity.this, ToiletMasterActivity.class));
        finish();
    }
}
