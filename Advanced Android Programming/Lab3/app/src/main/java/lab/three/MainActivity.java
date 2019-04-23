package lab.three;

import android.content.Intent;
import android.graphics.Color;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;

import static android.os.Build.ID;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    TextView colorText = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        colorText = findViewById(R.id.text_view);

        findViewById(R.id.button_activities).setOnClickListener(this);
        findViewById(R.id.button_zoo).setOnClickListener(this);
        findViewById(R.id.button_timer).setOnClickListener(this);

    }

    @Override
    public void onClick(View view){
        if (view.getId() == R.id.button_activities){
            Intent newProfileActivity = new Intent(MainActivity.this, Activities.class);
            startActivity(newProfileActivity);
        }
        else if (view.getId() == R.id.button_zoo){
            Intent newProfileActivity = new Intent(MainActivity.this, Zoo.class);
            startActivity(newProfileActivity);
        }
        else if (view.getId() == R.id.button_timer){
            Intent newProfileActivity = new Intent(MainActivity.this, Timer.class);
            startActivity(newProfileActivity);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement

        if (id == R.id.menu_blue) {
            changeBackgroundView(Color.BLUE,R.string.blue);
            return true;
        }
        else if (id == R.id.menu_red) {
            changeBackgroundView(Color.RED,R.string.red);
            return true;
        }
        else if (id == R.id.menu_green) {
            changeBackgroundView(Color.GREEN,R.string.green);
            return true;
        }
        else if (id == R.id.menu_yellow) {
            changeBackgroundView(Color.YELLOW,R.string.yellow);
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    private void changeBackgroundView(int color, int text){
        colorText.setBackgroundColor(color);
        colorText.setText(text);
    }
}
