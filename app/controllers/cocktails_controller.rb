class CocktailsController < ApplicationController
  def index
    @cocktails = Cocktail.all
  end

  def show
    @cocktail = Cocktail.find(params[:id])
    @doses = @cocktail.doses
    @ingredients = @cocktail.ingredients
  end

  def new
    @cocktail = Cocktail.new
    @ingredients = []
    Ingredient.all.each { |ingrt| @ingredients << ingrt.name }
  end

  def create
    @cocktail = Cocktail.new(params_cocktail)
    if @cocktail.valid?
      @cocktail.save
      redirect_to cocktail_path(@cocktail)
    else
      render :new
    end
  end

  private

  def params_cocktail
    params.require(:cocktail).permit(:name, :image_url)
  end
end
