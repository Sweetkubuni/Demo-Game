
function tile_plane(Width, Height, TileLen , idarr )
{
    this.width = Width;
    this.height = Height;
	this.tiles  = idarr;
	this.tileLen = TileLen;
}


tile_plane.prototype.render_plane = function(sheet)
{
	var i , j ;
	for( j = 0 ; j <  this.height; ++j)
		for( i = 0; i < this.width; ++i)
		{
			sheet.draw(this.tiles[  i + (j* this.width)], i * this.tileLen, j * this.tileLen ); 
		}
}

tile_plane.prototype.render_tile = function( sheet, dx, dy)
{
	var i = dx / this.tileLen;
	var j = dy / this.tileLen;
	sheet.draw(this.tiles[  i + (j* this.width)], dx, dy );
}
