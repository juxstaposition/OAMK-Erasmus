package electricity.bill.lab4;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.TextView;

import com.android.volley.toolbox.Volley;
import com.android.volley.RequestQueue;
import com.android.volley.Request;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.StringRequest;

public class MainActivity extends AppCompatActivity implements View.OnClickListener{

    RequestQueue queue = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        queue = Volley.newRequestQueue(this);

        findViewById(R.id.button_go).setOnClickListener(this);

    }

    @Override
    public void onClick(View view){
        if (view.getId() == R.id.button_go){
            TextView hyperLinkText = findViewById(R.id.web_input);

            String url = hyperLinkText.getText().toString();

            final TextView netResult = findViewById(R.id.web_page_text);

            StringRequest stringRequest = new StringRequest(Request.Method.GET, url,
                    new Response.Listener<String>() {
                        @Override
                        public void onResponse(String response) {
                            netResult.setText(response);
                        }
                    }, new Response.ErrorListener() {
                @Override
                public void onErrorResponse(VolleyError error) {
                    netResult.setText(error.getLocalizedMessage());
                }
            });
            queue.add(stringRequest);
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
        if (id == R.id.stock_monitor) {
            Intent StockMonitorActivity = new Intent(MainActivity.this, StockMonitor.class);
            startActivity(StockMonitorActivity);
            return true;
        }
        else if (id == R.id.stock_monitor_v2) {
            Intent StockMonitorV2 = new Intent(MainActivity.this, StockMonitorV2.class);
            startActivity(StockMonitorV2);
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
