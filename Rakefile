require "middleman"
require 'middleman-gh-pages'

task :build do
  sh "middleman build --clean"
end

task :deploy do
  sh "middleman build --clean"
  sh "middleman deploy"
end
