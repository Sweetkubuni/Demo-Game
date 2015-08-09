
function player ( speed, x0 , y0, itype)
{
    //movement speed
    this.speed = speed;
 
    //present movement
    this.x = x0;
    this.y = y0;
	
	//old movement
	this.prevx = null;
	this.prevy = null;
	
	// is character moving?
	this.ismoving = 0;
	
    // holds the animation states
    this.states = new Object;
	// which state to use
	this.type = itype;
	
	this.add_state = function( label, initframe , len_frames)
	{
		var state = {
				maxframes: len_frames,
				frame: initframe,
				firstframe: initframe
		};
		this.states[ label ] = state;
	}

	this.render = function(sheet)
	{
		if( this.type === null )
			return;
		var cframe = this.states[ this.type ].frame;
		sheet.draw(cframe,this.x,this.y);
		++this.states[ this.type ].frame;
		
		// looped animation
		if( this.states[ this.type ].frame === (this.states[ this.type ].maxframes + this.states[ this.type ].firstframe) )
			this.states[ this.type ].frame = this.states[ this.type ].firstframe;
	}
}
function player_update( e , me )
{
	var command = e.keyCode;
	me.prevx = me.x;
	me.prevy = me.y;
	switch(command)
	{
		//move left
		case 37:
		me.x -= me.speed;
		me.ismoving = 1;
		if( ( me.type === null ) || (me.type !== "left" ) ) {
			me.states[ me.type ].frame = me.states[ me.type ].firstframe;
			me.type = "left";
		}
		break;
		/*
		//move up
		case 38:
		me.y -= me.speed;
		me.ismoving = 1;
		if( ( me.type === null ) || (me.type !== "up" ) ) {
			me.states[ me.type ].frame = me.states[ me.type ].firstframe;
			me.type = "up";
		} 
		break; */
		//move right
		case 39:
		me.x += me.speed;
		me.ismoving = 1;
		if( ( me.type === null ) || (me.type !== "right" ) ) {
			me.states[ me.type ].frame = me.states[ me.type ].firstframe;
			me.type = "right";
		}
		break;
		/*
		//move down
		case 40:
		me.y += me.speed;
		me.ismoving = 1;
		if( ( me.type === null ) || (me.type !== "down" ) ) {
			me.states[ me.type ].frame = me.states[ me.type ].firstframe;
			me.type = "down";
		}
		break; */
		//standing position
		default:
		me.type = "stand";
	}
}
