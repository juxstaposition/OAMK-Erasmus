package electricity.bill.lab4;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.android.volley.RequestQueue;
import com.android.volley.toolbox.Volley;

import java.util.ArrayList;

public class StockMonitor extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_stock_monitor2);

        RequestQueue queue = Volley.newRequestQueue(this);

        final ArrayList<String> stockList = new ArrayList<String>();

        final ListView myListView = findViewById(R.id.list_layout2);
        final ArrayAdapter<String> aa = new ArrayAdapter<>(this,android.R.layout.simple_list_item_1, stockList);
        myListView.setAdapter(aa);

        final StockGetter stockGetter = new StockGetter(queue,stockList,aa);

        stockGetter.reqStock("Apple","AAPL",myListView);
        stockGetter.reqStock("Google","GOOGL",myListView);
        stockGetter.reqStock("Facebook","FB",myListView);
        stockGetter.reqStock("Nokia","NOK",myListView);
    }
}
