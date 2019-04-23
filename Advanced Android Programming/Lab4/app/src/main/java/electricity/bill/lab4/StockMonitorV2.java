package electricity.bill.lab4;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import java.util.ArrayList;
import com.android.volley.toolbox.Volley;
import com.android.volley.RequestQueue;

public class StockMonitorV2 extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_stock_monitor);

        RequestQueue queue = Volley.newRequestQueue(this);

        final ArrayList<String> stockList = new ArrayList<String>();

        final ListView myListView = findViewById(R.id.list_layout);
        final ArrayAdapter<String> aa = new ArrayAdapter<>(this,android.R.layout.simple_list_item_1, stockList);
        myListView.setAdapter(aa);

        final StockGetter stockGetter = new StockGetter(queue,stockList,aa);

        stockGetter.reqStock("Apple","AAPL",myListView);
        stockGetter.reqStock("Google","GOOGL",myListView);
        stockGetter.reqStock("Facebook","FB",myListView);
        stockGetter.reqStock("Nokia","NOK",myListView);

        Button addNewStock = findViewById(R.id.button_add);
        addNewStock.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                EditText name = findViewById(R.id.stock_name);
                EditText id = findViewById(R.id.stock_id_input);

                stockGetter.reqStock(name.getText().toString(),id.getText().toString(),myListView);

            }});

    }


}
