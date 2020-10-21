class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    print "HELLLLER"
    @user = User.find_by(username: login_params[:username])
    print 'HELOOOOi'
    print @user
    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      pp @user
      token = encode({id: @user.id})
      render json: {
        user: @user.attributes.except('password_digest'),
        token: token
        }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    render json: @current_user.attributes.except('password_digest'), status: :ok
  end


  private

  def login_params
    params.require(:authentication).permit(:username, :password)
  end
end
