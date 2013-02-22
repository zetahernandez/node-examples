execute "disable-default-site" do
	command "sudo a2dissite default"
	notifies :reload, resources(:service => "apache2"), :delayed
end
execute "disable-default-site" do
	command "sudo a2dissite default"
	
end
