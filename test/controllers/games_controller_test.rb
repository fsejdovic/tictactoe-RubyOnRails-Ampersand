require 'test_helper'

class GamesControllerTest < ActionController::TestCase
  setup do
    # @game = Game.first
    @game = games(:one)
  end

  test "should get index the game" do
    get :index
    assert_response :success, @response.body
  end

  test "should get show the game" do
    get :show, id: @game.id
    assert_response :success, @response.body
  end

  test "should update game" do
    patch :update, id: @game.id, index: "1"
    assert_redirected_to game_path(@game)
  end

  test "should get new game" do
    get :new
    assert_response :success, @response.body
  end

  test "should create game" do
    assert_difference('Game.count') do
      post :create, game: {player_1: "player_1", player_2: "player_2"}
    end
  end
end
