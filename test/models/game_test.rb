require 'test_helper'

class GameTest < ActiveSupport::TestCase
  test "should not create if not valid" do 
    game = Game.new
    assert_not game.save, "Save the game without player_1 and player_2"

    game.player_1 = "player_one"
    game.player_2 = "b" * 251
    assert_not game.save, "player_2 is too long"

    game.player_2 = "player_two"
    game.player_1 = "a" * 251
    assert_not game.save, "player_1 is too long"

    game.player_1 = "player_two"
    assert_not game.save, "player_1 and player_2 are same, it should be different"

    game.player_1 = "player_one"
    assert game.save
  end

  test "should return active current player?" do
    game = Game.first
    expected = game.first_player_active?
    assert_equal expected, false, "current player is active"
  end

  test "shoud return current symbol of active player" do
    game = Game.first
    expected = game.current_symbol
    assert_equal expected, "X"
  end

  test "shoud return current symbol of inactive player" do
    game = Game.first
    expected = game.current_symbol
    assert_equal expected, "X"
  end

  test "should change the active player to inactive player" do
    game = Game.first
    expected = game.switch_user
    assert_equal expected, game.player_1
  end

  test "should return player win or not?" do
    game = Game.first
    expected = game.won?
    assert_equal expected, false
  end
end
