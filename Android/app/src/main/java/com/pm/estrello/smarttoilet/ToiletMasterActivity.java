package com.pm.estrello.smarttoilet;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import androidx.appcompat.app.AppCompatActivity;

import java.util.ArrayList;

public class ToiletMasterActivity extends AppCompatActivity {
    private ListView _toiletList;
    private ArrayList<String> toilets;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_toilet_master);
        setTitle("Choose the toilet");
        initializeViews();
        _toiletList.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                String toiletName = toilets.get(position);
                changeActivity(toiletName);
            }
        });
    }

    /**
     * Method to initialize views.
     */
    private void initializeViews() {
        _toiletList = findViewById(R.id.toiletList);
        toilets = new ArrayList<>();
        toilets.add("Toilet 1");
        toilets.add("Toilet 2");
        toilets.add("Toilet 3");
        toilets.add("Toilet 4");
        toilets.add("Toilet 5");
        toilets.add("Toilet 6");
        ArrayAdapter<String> adapter = new ArrayAdapter<>(this, android.R.layout.simple_list_item_1, toilets);
        _toiletList.setAdapter(adapter);
    }

    private void changeActivity(String toiletName) {
        Bundle bundle = new Bundle();
        bundle.putString("toiletName", toiletName);
        Intent intent = new Intent(ToiletMasterActivity.this, AmmoniaDetails.class);
        intent.putExtras(bundle);
        startActivity(intent);
    }
}
