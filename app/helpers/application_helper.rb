module ApplicationHelper
  def has_error(obj, field)
    return "" if obj.blank? or obj.keys.blank? or field.blank? or !obj.keys.include?(field)
    return "has-error"
  end

  def print_error(obj, field)
    return "" if obj.blank? or obj.keys.blank? or field.blank? or !obj.keys.include?(field)
    return "<span class=\"help-block\">#{obj[field].uniq.join("<br>")}</span>".html_safe
  end
end
