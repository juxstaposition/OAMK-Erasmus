package lab.three;

import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import org.w3c.dom.Text;

public class Activities extends AppCompatActivity implements View.OnClickListener{

    TextView webPageLink = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_activities);

        findViewById(R.id.button_open_map).setOnClickListener(this);
        findViewById(R.id.button_go).setOnClickListener(this);
        findViewById(R.id.button_create_call).setOnClickListener(this);

        webPageLink = findViewById(R.id.web_page_input);

    }

    @Override
    public void onClick(View view) {
        if (view.getId() == R.id.button_open_map){
            Uri location = Uri.parse("geo:65.000516,25.512689?z=16"); // z param is zoom level
            Intent mapIntent = new Intent(Intent.ACTION_VIEW, location);
            startActivity(mapIntent);
        }
        else if (view.getId() == R.id.button_create_call){
            Uri number = Uri.parse("tel:+358206110200");
            Intent callIntent = new Intent(Intent.ACTION_DIAL, number);
            startActivity(callIntent);
        }
        else if (view.getId() == R.id.button_go){
            String link = webPageLink.getText().toString();
            Uri web_page = Uri.parse("http://"+link);
            Intent webIntent = new Intent(Intent.ACTION_VIEW, web_page);
            startActivity(webIntent);
        }


    }
}
