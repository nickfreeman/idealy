class Idea < ActiveRecord::Base
    acts_as_followable
    acts_as_votable

    belongs_to :user

    has_attached_file :photo, :styles => { :large => "900x900>", :medium => "300x300#", :thumb => "100x100#" } , :default_url => "/images/:style/missing.png"
    validates_attachment_content_type :photo, :content_type => /\Aimage\/.*\Z/
    validates_attachment :photo, :size => { :in => 0..5.megabytes }

    has_many :attachments
    accepts_nested_attributes_for :attachments

    has_many :contributors
    has_many :updates
end
