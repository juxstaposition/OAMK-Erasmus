package lab.two;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.TextView;

import java.util.ArrayList;

public class MainActivity extends AppCompatActivity {

    String displayText;

    TextView myInput = null;

    ArrayList<String> countries = new ArrayList<String>();

    int clicks = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /**
         * Layouts declaration
         */
        LinearLayout myVerticalLayout = new LinearLayout(this);
        myVerticalLayout.setOrientation(LinearLayout.VERTICAL);

        LinearLayout myHorizontalLayout = new LinearLayout(this);
        myHorizontalLayout.setOrientation(LinearLayout.HORIZONTAL);

        /**
         * Game button
         *
         *
         */
        final Button gameButton = new Button(this);
        displayText = "Button pressed " + clicks + " times.";
        gameButton.setText(displayText);
        gameButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                clicks = add(clicks);
                displayText = "Button pressed " + clicks + " times.";
                gameButton.setText(displayText);
            }
        });

        /**
         * Countries List
         */
        countries.add("Afghanistan");
        countries.add("Albania");
        countries.add("Algeria");
        countries.add("American Samoa");
        countries.add("Andorra");

        myInput = new EditText(this);
        final ListView myListView = new ListView(this);

        final ArrayAdapter<String> aa = new ArrayAdapter<>(this,android.R.layout.simple_list_item_1,countries);
        myListView.setAdapter(aa);

        /**
         * Buttons
         */
        final Button addButton = new Button(this);
        displayText = "Add";
        addButton.setText(displayText);
        addButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                String text = myInput.getText().toString();
                countries.add(text);
                aa.notifyDataSetChanged();
            }
        });

        final Button editButton = new Button(this);
        displayText = "Edit";
        editButton.setText(displayText);

        final Button deleteButton = new Button(this);
        displayText = "Delete";
        deleteButton.setText(displayText);
        deleteButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                String text = myInput.getText().toString().toLowerCase();
                for (int i = 0 ; i < countries.size(); i++){
                    String country = countries.get(i).toLowerCase();
                    if (country.length() == text.length() && country.contains(text)) {
                        countries.remove(i);
                        aa.notifyDataSetChanged();
                    }
                }
            }
        });

        final Button greetingButton = new Button(this);
        displayText = "Greet";
        greetingButton.setText(displayText);
        greetingButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                Intent intent = new Intent(MainActivity.this, GreetingActivity.class);
                intent.putExtra("key", 2);
                startActivity(intent);
            }
        });

        /**
         * Set View
         */
        myHorizontalLayout.addView(addButton);
        myHorizontalLayout.addView(editButton);
        myHorizontalLayout.addView(deleteButton);
        myHorizontalLayout.addView(greetingButton);

        myVerticalLayout.addView(gameButton);
        myVerticalLayout.addView(myHorizontalLayout);
        myVerticalLayout.addView(myInput);
        myVerticalLayout.addView(myListView);

        setContentView(myVerticalLayout);
    }

    public int add(int a){
        a = a + 1;
        return a;
    }
}
