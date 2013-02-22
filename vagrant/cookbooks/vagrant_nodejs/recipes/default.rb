require_recipe "apt"
require_recipe "nodejs"
#include_recipe "nodejs::install_from_package"
include_recipe "nodejs::npm"