package com.quantum;

import com.facebook.react.ReactActivity;
import io.branch.rnbranch.*;
import android.content.Intent;
import android.os.Bundle;
public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
   
    @Override
    protected String getMainComponentName() {
        return "quantum";
    }
    @Override
    protected void onStart() {
        super.onStart();
        RNBranchModule.initSession(this.getIntent().getData(), this);
       /* Branch branch = Branch.getInstance();

    branch.initSession(new Branch.BranchReferralInitListener(){
        @Override
        public void onInitFinished(JSONObject referringParams, BranchError error) {
            if (error == null) {
                // params are the deep linked params associated with the link that the user clicked -> was re-directed to this app
                // params will be empty if no data found
                // ... insert custom logic here ...
            } else {
                Log.i("MyApp", error.getMessage());
            }
        }
    }, this.getIntent().getData(), this);*/
    }
    @Override
    public void onNewIntent(Intent intent) {
        this.setIntent(intent);
    }
}
