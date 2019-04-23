package lab.two;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

public class GreetingActivity extends AppCompatActivity {

    TextView nameInput = null;
    TextView displayName = null;
    TextView displayGreeting = null;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_greeting);

        displayName = new TextView(this);
        String nameDisplay = "Your Name is";
        displayName.setText(nameDisplay);

        displayGreeting = new TextView(this);

        nameInput = new EditText(this);
        nameInput.setHint("Enter Your Name");

        TextWatcher textWatcher = new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
            }
            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
            }
            @Override
            public void afterTextChanged(Editable editable) {
                String name = "Your Name Is: " + nameInput.getText().toString();
                displayName.setText(name);
                displayGreeting.setText(null);
            }
        };
        nameInput.addTextChangedListener(textWatcher);

        LinearLayout myVerticalLayout = new LinearLayout(this);
        myVerticalLayout.setOrientation(LinearLayout.VERTICAL);

        LinearLayout myHorizontalLayout = new LinearLayout(this);
        myHorizontalLayout.setOrientation(LinearLayout.HORIZONTAL);
        myHorizontalLayout.setGravity(Gravity.CENTER);

        LinearLayout myHorizontalLayout2 = new LinearLayout(this);
        myHorizontalLayout2.setOrientation(LinearLayout.HORIZONTAL);
        myHorizontalLayout2.setGravity(Gravity.CENTER);

        Button englishButton = createGreetingButton("English","Hi ");

        Button sverigeButton = createGreetingButton("Sverige","Hejjsan ");

        Button suomeksiButton = createGreetingButton("Suomeksi","Terve ");

        Button surpriseButton = createGreetingButton("Surprise","Hola ");

        myHorizontalLayout.addView(englishButton);
        myHorizontalLayout.addView(sverigeButton);

        myVerticalLayout.addView(nameInput);
        myVerticalLayout.addView(myHorizontalLayout);

        myHorizontalLayout2.addView(suomeksiButton);
        myHorizontalLayout2.addView(surpriseButton);

        myVerticalLayout.addView(myHorizontalLayout2);

        myVerticalLayout.addView(displayName);
        myVerticalLayout.addView(displayGreeting);

        setContentView(myVerticalLayout);
    }

    private void setGreeting( String language){
        String inputContent = nameInput.getText().toString();
        if (inputContent.length() > 0) {
            String displayText = language + inputContent;
            displayGreeting.setText(displayText);
        }
    }

    private Button createGreetingButton(String language, final String greeting){
        Button newButton = new Button(this);
        newButton.setText(language);
        newButton.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                setGreeting(greeting);
            }
        });
        return newButton;
    }

}
