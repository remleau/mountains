export class Mountains {

  
  constructor(settings) {
    this.settings = { ...this.defaults, ...settings };
    this.body = document.getElementById(this.settings.body);
    this.init();
  }


  // Les options par défauts
  get defaults() {
    return {
      'body': 'app',
      'key': "AIzaSyCfKsypw1vgq8jKC_s2O8GoBho51L4cyaI"
    };
  }


  // Instancie le plugin
  init = () => {
    console.log(this.settings)
    //this.enqueue_scripts();
  }


  // Ajoute les scripts au body
  enqueue_scripts = () => {
    const sources = [
      {
        'attributes': 'defer',
        'src': 'https://maps.googleapis.com/maps/api/js?key='+ this.settings.key +'&libraries=places',
      },
    ];

    sources && sources.forEach(script => {
      let scriptNode = document.createElement('script');
      let body = this.body.closest('body');
      scriptNode.src = script.src;
      script.attributes && scriptNode.setAttribute(script.attributes, script.attributes);
      body.append(scriptNode);
    });
  }

} // Fin Class