class CategoriesController < ApplicationController
  before_action :set_category, only: [:show, :update, :destroy]

  # GET /categories
  def index
    @categories = Category.all

    render json: @categories
  end

  # GET /categories/1
  def show
    render json: @category
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category, status: :created, location: @category
    else
      render error: { error: 'Unable to create Category.' }, status: 400
      # render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: { message: 'Category successfully update. ' }, status: 200
      # render json: @category
    else
      render json: { error: 'Unable to update category. ' }, status: 400
      # render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    # @category.destroy
    @category = set_category
    if @category
      @category.destroy
      render json: { message: 'Category successfully deleted. ' }, status: 200
    else
      render json: { error: 'Unable to delete Category. ' }, status: 400
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_category
    @category = Category.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def category_params
    params.require(:category).permit(:user_id, :title)
  end
end
