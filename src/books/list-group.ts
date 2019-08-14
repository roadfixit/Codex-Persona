import {bindable, processContent} from 'aurelia-templating';
import {FEATURE} from 'aurelia-pal';

//This custom attribute was created by Jeremy Danyow as a part of this
//stackoverflow answer https://stackoverflow.com/questions/43306744/using-custom-element-content-as-item-template/43325889#43325889
@processContent(makePartReplacementFromContent)
export class ListGroup {
  @bindable itemsSource = null;
  @bindable defaultValue = model => "";
  
}

function makePartReplacementFromContent(viewCompiler, viewResources, element, behaviorInstruction) {
  const content = element.firstElementChild;
  if (content) {
    
    //note: In the latest version of aurelia this can be done in a cleaner way using DOM.createTemplateElement() method.
    const template = document.createElement('template');
    

    
    // indicate the part this <template> replaces.
    template.setAttribute('replace-part', 'item-template');
    
    // replace the element's content with the <template>
    element.insertBefore(template, content);
    element.removeChild(content);
    template.content.appendChild(content);

    return true;
  }
}