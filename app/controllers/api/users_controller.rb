class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def show
    @user = User.find_by(id: params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    @user.destroy
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
