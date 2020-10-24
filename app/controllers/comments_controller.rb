class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments, include: [:post, :user]
  end

  # GET /comments/1
  def show
    render json: @comment, include: [:post, :user]
  end

  # POST /comments
  def create
    @post = Post.find(params[:post_id])
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    @comment.post = @post
    if @comment.save
      render json: @post, include: [:user, comments: {include: :user}],status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end     
  end 

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      @post = @comment.post
      render json: @post, include: [:user, comments: {include: :user}]
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content, :user_id, :post_id)
    end
end
