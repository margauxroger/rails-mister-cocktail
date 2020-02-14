class DosesController < ApplicationController
  def new
    @dose = Dose.new
    @ingredients = Ingredient.all
    @cocktails = Cocktail.find(params[:cocktail_id])
  end

  def create
    @dose = Dose.new(params_dose)
    @dose.cocktail_id = params[:cocktail_id]
    if @dose.valid?
      @dose.save
      redirect_to cocktail_path(@dose.cocktail_id)
    else
      render :new
    end
  end

  def destroy
    @dose = Dose.find(params[:id])
    @cocktail = @dose.cocktail
    @dose.destroy
    redirect_to cocktail_path(@cocktail)
  end

  private

  def params_dose
    params.require(:dose).permit(:description, :ingredient_id)
  end
end
