class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]
  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all

    render json: @comments, include: [:post, :user]
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    render json: @comments, include: [:post, :user]
  end

  # GET /comments/new
  def new
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit
  end

  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)
    @comment.user = @current_user
    if @comment.save
      render json: @comment, include: [:post, :user], status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end     
  end 



  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    if @comment.update(comment_params)
      render json: @comment, include: [:post, :user]
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :post_id, :user_id)
    end
end
