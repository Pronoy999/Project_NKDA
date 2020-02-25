package com.pm.estrello.smarttoilet;

import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;

public class AmmoniaDetails extends AppCompatActivity {
    private ListView _ammoniaList;
    private ArrayList<String> ammoniaDetails;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_ammonia_details);
        initializeViews();
        Bundle bundle = getIntent().getExtras();
        String toiletName = bundle.getString("toiletName");
        setTitle(toiletName);
    }

    /**
     * Method to initialize views.
     */
    private void initializeViews() {
        _ammoniaList = findViewById(R.id.ammoniaList);
        ammoniaDetails = new ArrayList<>();
        ammoniaDetails.add("Toilet Seat 1:  Ammonia Level 12.38%");
        ammoniaDetails.add("Toilet Seat 1:  Ammonia Level 34.36%");
        ammoniaDetails.add("Toilet Seat 1:  Ammonia Level 79.44%");
        ammoniaDetails.add("Toilet Seat 1:  Ammonia Level 10.50%");
        ammoniaDetails.add("Toilet Seat 1:  Ammonia Level 32.87%");
        ArrayAdapter adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, ammoniaDetails);
        _ammoniaList.setAdapter(adapter);
    }
}
