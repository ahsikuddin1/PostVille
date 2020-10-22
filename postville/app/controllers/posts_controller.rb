class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.all
    render json: @posts, include: [:comments, :user]
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    render json: @posts, include: [:comments, :user]
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

# POST /posts
def create
  @post = Post.new(post_params)
  @post.user = @current_user
  if @post.save
    render json: @post, include: [:comments, :user], status: :created
  else
    render json: @post.errors, status: :unprocessable_entity
  end
end
# PATCH/PUT /posts/1
def update
  if @post.update(post_params)
    render json: @post, include: [:comments, :user]
  else
    render json: @post.errors, status: :unprocessable_entity
  end
end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:content)
    end
end
