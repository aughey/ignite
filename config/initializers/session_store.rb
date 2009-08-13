# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_ignite_session',
  :secret      => '2ae29bd2a1fb6e18c617bbdacdb425d5767e1893ff86c77bc855a818175cee9fcfae0187fe28db2d319ecc8d731e64e39d1595c7adbf4965f36f25f95c1ace9c'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
