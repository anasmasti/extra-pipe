# Extra Pipe 🚀
### Without introductions, ExtraPipe is just some kindfull Pipes for Angular developers

until now we just have 'capitalize' Pipe, we are working to include new useful Pipes for you.
<br/>

<strong>Capitalize Pipe:</strong> it takes a string value as input and in return it offers you a capitalized text.

- 1 : Import ExtraPipeModule 
```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // <----
// HERE
import { ExtraPipeModule } from 'projects/extra-pipe/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // LIKE THIS
    ExtraPipeModule // <----
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

- 2 : Add your Pipe with 'async' pipe
```html 
<h1>
  {{'title' | capitalize | async}}
</h1>
```
<br/>
<br/>

> Version 0.0.1
