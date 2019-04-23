package lab.three;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class Timer extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_timer);

        final TextView inputTime = findViewById(R.id.time_value_text);
        Button startButton = findViewById(R.id.button_start);

        startButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String timeInSeconds = inputTime.getText().toString();

                Intent intent = new Intent(Timer.this, CountDown.class);
                intent.putExtra("TIME",timeInSeconds);
                startActivity(intent);
            }
        });

    }
}
