module scenes {
  export class OverScene extends objects.Scene {
    // Private Instance Variables
    private _overLabel: objects.Label;
    private _backButton: objects.Button;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Private Mathods
    private _backButtonClick():void {
      
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._overLabel = new objects.Label("Game Over", "40px", "Consolas", "#000000", 320, 240, true);
      
      this.Main();
    }

    public Update(): void {

    }

    // This is where the fun happens
    public Main(): void {
      // add the welcome label to the scene
      this.addChild(this._overLabel);

      // add the backButton to the scene
      this.addChild(this._backButton);

      // event listeners
     // this._backButton.on("click", this._backButtonClick);
    }
  }
}
