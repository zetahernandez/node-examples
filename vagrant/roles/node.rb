name "node"
description "node role"

run_list(
	"recipe[apt]",
	"recipe[build-essential]",
	"recipe[openssl]"
#	"recipe[nodejs]"
)
default_attributes(
  "build_essential" => {
    "compiletime" => true
  }
)
