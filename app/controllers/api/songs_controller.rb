class Api::SongsController < ApplicationController
  def create
    @song = Song.new(song_params)
    if !@song.audio.attached?
      render json: ['No audio file attached'], status: 400
    elsif @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 400
    end
  end

  def index
    songs = []
    if params['search']
      search_val = '%' + params['search'] + '%'
      songs = Song.where('title LIKE ?', search_val).limit(params['limit'])
      unless songs 
        render json: ['No tracks found'], status: 404
      end
    else 
      songs = Song.all.limit(params['limit'])
    end 
    debugger
  end

  def show
    @song = Song.find_by(id: params[:id])
    if @song
      render :show
    else
      render json: ['Song not found'], status: 404
    end
  end

  def update
    @song = Song.find_by(id: params[:song][:id])
    if owner?(@song)
      if @song.update_attributes(song_params)
        render :show
      else
        render json: @song.errors.full_messages, status: 500
      end
    else
      render json: ['You do not have permission to edit this song'], status: 401
    end
  end

  def destroy
    @song = Song.find_by(id: params[:id])
    if owner?(@song)
      @song.destroy
      render json: @song.id, status: 200
    else
      render json: ['You do not have permission to delete this song'], status: 401
    end
  end

  private
  def song_params
    params.require(:song).permit(:title, :description, :release_date, :uploader_id, :artist, :description, :cover, :audio)
  end

  def owner?(song)
    return false unless logged_in?
    song.uploader_id == current_user.id
  end
end
