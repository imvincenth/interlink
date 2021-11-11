class Api::EducationsController < ApplicationController

  def create
    @education = Education.new(education_params, user_id: current_user.id)

    if @education.save
      render :show
    else
      render json: @education.errors.full_messages, status: 422
    end
  end

  def index
    @educations = Education.all
    render :index
  end

  def update
    @education = Education.find_by(id: params[:id])

    if @education && @education.update(education_params)
      render :show
    else
      render json: @education.errors.full_messages, status: 422
    end
  end

  def destroy
    @education = Education.find_by(id: params[:id])
    
    if @education
      @education.destroy
    end
  end

  private
  def education_params
    params.require(:education).permit(
      :school,
      :degree,
      :subject,
      :start_date,
      :end_date,
      :grade,
      :extracurriculars
    )
  end
end
