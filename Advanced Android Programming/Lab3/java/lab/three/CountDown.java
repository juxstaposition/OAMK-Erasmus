package lab.three;

import android.content.Intent;
import android.media.MediaPlayer;
import android.os.CountDownTimer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.TextView;

import org.w3c.dom.Text;

public class CountDown extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_count_down);

        final MediaPlayer mp = MediaPlayer.create(this, R.raw.bear);

        final TextView countDownText = findViewById(R.id.count_down_text);

        Bundle bundle = getIntent().getExtras();
        String timeString = bundle.getString("TIME");

        int timeInt = 0;
        try{
            timeInt = Integer.parseInt(timeString) * 1000;
        } catch(NumberFormatException nfe) {
            System.out.println("Could not parse " + nfe);
        }


        new CountDownTimer(timeInt, 1000) {

            public void onTick(long millisUntilFinished) {
                countDownText.setText("" + millisUntilFinished / 1000);
            }

            public void onFinish() {
                mp.start();
                onBackPressed();
            }
        }.start();

    }
}
