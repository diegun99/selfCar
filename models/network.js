class Level {
    constructor(inputCount,outputCount){
        this.inputs = new Array(inputCount);
        this.outputs = new Array(outputCount);
        this.biases = new Array (outputCount);

        this.weights = [];

        for(let i= 0; i < inputCount; i++){// por cada input se carga un peso con todos los outputs
            this.weights[i] = new Array(outputCount);

        }

        Level.#randomize(this);

        }

        static #randomize(level)  {
            for (let i= 0;i < level.inputs.length ; i++) {
                for (let j = 0; j < level.outputs.length; j++) {
                    level.weights[i][j] = Math.random()*2-1;
                    
                }

            }
            for (let i= 0;i < level.biases.length ; i++) {
                    level.biases[i] = Math.random()*2-1;
                    
            }

         }

         static feedForward(givenInputs,level){// algoritmo de retroalimentacion
            for (let i = 0; i < level.inputs.length; i++) {
                level.inputs[i] = givenInputs[i];  
            }
            for (let i = 0; i < level.outputs.length; i++) {
                for (let j = 0; j < inputs.length; j++) {
                    sum+= level.inputs[j]*level.weights[j][i];
                    
                }

                if(sum>level.biases[i]){
                    level.outputs[i]= 1;
                }else{
                    level.outputs[i]=0;
                }
                
            }

            return level.outputs;

         }


}