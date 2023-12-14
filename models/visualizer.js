class Visualizer {
    static drawNetwork(ctx,network){
        const margin = 50;
        const left = margin;
        const top= margin;
        const width = ctx.canvas.width-margin*2;
        const height = ctx.canvas.height-margin+2;

        Visualizer.drawLevel(ctx,network.levels[0],
            left,top,
            width,height
        );

    }

    static drawLevel(ctx,level,left,top,width,height){
        const right =left+ width;
        const bottom =  top + height;

        const nodeRadius = 18;

        for(let i ; i<level.inputs.length; i++){
            const x = lerp(
                left,
                right,
                level.inputs.length==1
                ? 0.5
                :i/(levelinputs.length-1)
            )
        }


    }

}s