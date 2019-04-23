package lab.one;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.ArrayAdapter;
import android.widget.ListView;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Human student1 = new Human();
        Human student2 = new Student();                     // example of polymorphism
        student1.publicName = "John public Doe";
        student1.setPrivateName("John private Doe");

        System.out.println(student1.getPrivateName());
        System.out.println(student1.getPublicName());

        student2.setPrivateName("Don John");
        System.out.println(student2.getPrivateName());

        final String[] countries = new String[]{
                "Afghanistan", "Albania", "Algeria", "American Samoa",
                "Andorra","Angola","Anguilla","Antarctica"
        };

        ListView myListView = (ListView) findViewById(R.id.country_list_view);
        final ArrayAdapter<String> aa;
        aa = new ArrayAdapter<String>(this,android.R.layout.simple_list_item_1,countries);
        myListView.setAdapter(aa);
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

        if (id == R.id.another_view){
            Intent newView = new Intent(MainActivity.this,Main2Activity.class);
            startActivity(newView);
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
}
