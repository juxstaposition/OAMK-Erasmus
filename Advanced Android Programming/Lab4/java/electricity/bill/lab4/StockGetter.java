package electricity.bill.lab4;

import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class StockGetter {

    RequestQueue queue;
    ArrayList<String> stockList;
    ArrayAdapter<String> aa;

    public StockGetter(RequestQueue queue, ArrayList<String> stockList, ArrayAdapter<String> aa){
        this.queue = queue;
        this.stockList = stockList;
        this.aa = aa;
    }

    public void reqStock(final String name, final String id,final ListView myListView){

        String url = "https://financialmodelingprep.com/api/company/price/" + id + "?datatype=json";

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject response) {

                        JSONObject company;
                        String price;
                        try{
                            company = response.getJSONObject(id);
                            try{

                                price = String.valueOf(company.get("price"));
                                stockList.add(name + ": " + price + " USD");
                                myListView.setAdapter(aa);

                            } catch (JSONException e){
                                e.printStackTrace();
                            }
                        } catch (JSONException e){
                            e.printStackTrace();
                        }


                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        error.printStackTrace();
                    }
                });

        queue.add(jsonObjectRequest);

    }

}
