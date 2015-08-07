class GamesController < ApplicationController
  def index
    @games = Game.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @games.to_json }
    end
  end

  def games_api
    @games = Game.all
    games = @games.collect{|g| g.to_json}
    render json: games.to_json
  end

  def show
    @game = Game.find(params[:id])
  end

  def update
    @game = Game.find(params[:id])
    @game.board[params[:index].to_i] = @game.current_symbol
    @game.switch_user
    @game.save!

    redirect_to game_path(@game)
  end

  def new
    @game = Game.new()
  end

  def create
    @game = Game.new(game_params)
    @game.board = (1..9).to_a
    @game.current_player = @game.player_1

    if @game.save
      redirect_to @game
    else
      render :new
    end
  end

  private

  def game_params
    params[:game].permit(:player_1, :player_2)
  end
end
