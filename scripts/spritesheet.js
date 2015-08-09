function spritesheet( url )
{
	this.sheet = new Image();
	this.sheet.src = url;
	this.rects = [];

	this.append = function( nx, ny, nw, nh)
{
	var rect = {
			x:nx,
			y:ny,
			w:nw,
			h:nh
	};
	this.rects.push(rect);
}

	this.draw = function( sel, px , py )
	{
		ctx.drawImage(this.sheet,this.rects[sel].x,this.rects[sel].y,this.rects[sel].w,this.rects[sel].h,px,py,this.rects[sel].w,this.rects[sel].h);
	}

}