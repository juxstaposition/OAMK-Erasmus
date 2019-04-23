package lab.three;

import android.media.MediaPlayer;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

public class Zoo extends AppCompatActivity implements View.OnClickListener{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.birds);
        findViewById(R.id.img_owl).setOnClickListener(this);
        findViewById(R.id.img_bird2).setOnClickListener(this);
        findViewById(R.id.img_bird3).setOnClickListener(this);
        findViewById(R.id.img_bird4).setOnClickListener(this);
    }

    @Override
    public void onClick (View view){
        int id = view.getId();
        if ( id == R.id.img_wolf){
            playMusic(R.raw.wolf);
        }
        else if ( id == R.id.img_bear){
            playMusic(R.raw.bear);
        }
        else if ( id == R.id.img_lamb){
            playMusic(R.raw.lamb);
        }
        else if ( id == R.id.img_elephant){
            playMusic(R.raw.elephant);
        }
        else if ( id == R.id.img_owl){
            playMusic(R.raw.huuhkaja_norther_eagle_owl);
        }
        else if ( id == R.id.img_bird2){
            playMusic(R.raw.peukaloinen_wren);
        }
        else if ( id == R.id.img_bird3){
            playMusic(R.raw.peippo_chaffinch);
        }
        else if ( id == R.id.img_bird4){
            playMusic(R.raw.punatulkku_northern_bullfinch);
        }
    }

    private void playMusic (int animalId){
        final MediaPlayer mp = MediaPlayer.create(this, animalId);
        mp.start();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_animals, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement

        if (id == R.id.menu_mammals) {
            setContentView(R.layout.mamals);
            findViewById(R.id.img_wolf).setOnClickListener(this);
            findViewById(R.id.img_bear).setOnClickListener(this);
            findViewById(R.id.img_elephant).setOnClickListener(this);
            findViewById(R.id.img_lamb).setOnClickListener(this);
            return true;
        }
        else if (id == R.id.menu_birds) {
            setContentView(R.layout.birds);
            findViewById(R.id.img_owl).setOnClickListener(this);
            findViewById(R.id.img_bird2).setOnClickListener(this);
            findViewById(R.id.img_bird3).setOnClickListener(this);
            findViewById(R.id.img_bird4).setOnClickListener(this);
            return true;
        }


        return super.onOptionsItemSelected(item);
    }
}
