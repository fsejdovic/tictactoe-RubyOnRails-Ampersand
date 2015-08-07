class Game < ActiveRecord::Base
  serialize :board, Array

  # Validations
  validates :player_1, presence: true, length: { maximum: 250 }
  validates :player_2, presence: true, length: { maximum: 250 }
  validate  :player_names_are_different

  def player_names_are_different
    errors.add(:player_2, "can't be the same as player 1") if player_1 == player_2
  end

  WINNING_MOVES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ]

  def first_player_active?
    current_player == player_1
  end

  def current_symbol
    first_player_active? ? "O" : "X"
  end

  def inactive_symbol
    first_player_active? ? "X" : "O"
  end

  def switch_user
    self.current_player = first_player_active? ? player_2 : player_1
  end

  def won?
    WINNING_MOVES.any? { |line| win_check?(line) }
  end

  def win_check?(line)
    line.all? { |value| board[value] == inactive_symbol }
  end

  def finished?
    board.all? { |field| field == "X" || field == "O" }
  end

  def game_result
    if won?
      "#{switch_user} Won!"
    elsif finished?
      "Draw"
    else
      ""
    end
  end

  def to_json
    { id: id, player_1: player_1, player_2: player_2, game_result: game_result,
      current_player: current_player, won: won?, finished: finished?, board: board }
  end
end
