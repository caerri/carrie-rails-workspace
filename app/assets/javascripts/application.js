document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggle-mode-btn');
  if (!toggleBtn) return;

  function toggleMode() {
    if (document.documentElement.classList.contains('dark-mode')) {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  }

  toggleBtn.addEventListener('click', toggleMode);

  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark-mode');
  }
});
clear
^C- Gracefully stopping, waiting for requests to finish
=== puma shutdown: 2025-09-27 17:25:51 -0600 ===
- Goodbye!
Exiting
carriesnow@Mac carrie-rails-workspace % clear
carriesnow@Mac carrie-rails-workspace % bin/rails server
// ...existing code...
  
ç^C- Gracefully stopping, waiting for requests to finish
=== puma shutdown: 2025-09-27 17:27:33 -0600 ===
- Goodbye!
Exiting
carriesnow@Mac carrie-rails-workspace % bin/rails server
=> Booting Puma
=> Rails 8.0.3 application starting in development 
=> Run `bin/rails server --help` for more startup options
Puma starting in single mode...
* Puma version: 7.0.4 ("Romantic Warrior")
* Ruby version: ruby 3.3.4 (2024-07-09 revision be1089c8ec) [arm64-darwin25]
*  Min threads: 3
*  Max threads: 3
*  Environment: development
*          PID: 44512
* Listening on http://127.0.0.1:3000
* Listening on http://[::1]:3000
Use Ctrl-C to stop
Started GET "/" for 127.0.0.1 at 2025-09-27 17:28:40 -0600
  ActiveRecord::SchemaMigration Load (1.4ms)  SELECT "schema_migrations"."version" FROM "schema_migrations" ORDER BY "schema_migrations"."version" ASC /*application='DevHubMonolith'*/
Processing by HomeController#index as HTML
  Rendering layout layouts/application.html.erb
  Rendering home/index.html.erb within layouts/application
  Rendered home/index.html.erb within layouts/application (Duration: 0.2ms | GC: 0.0ms)
  Rendered layout layouts/application.html.erb (Duration: 3.7ms | GC: 0.0ms)
Completed 200 OK in 11ms (Views: 7.1ms | ActiveRecord: 0.0ms (0 queries, 0 cached) | GC: 1.9ms)


// ...existing code...
Processing by HomeController#index as HTML
  Rendering layout layouts/application.html.erb
  Rendering home/index.html.erb within layouts/application
  Rendered home/index.html.erb within layouts/application (Duration: 0.1ms | GC: 0.0ms)
  Rendered layout layouts/application.html.erb (Duration: 0.7ms | GC: 0.0ms)
Completed 200 OK in 1ms (Views: 1.0ms | ActiveRecord: 0.0ms (0 queries, 0 cached) | GC: 0.0ms)


Started GET "/stylesheets/application.css" for 127.0.0.1 at 2025-09-27 17:29:59 -0600
  
ActionController::RoutingError (No route matches [GET] "/stylesheets/application.css"):
  
Started GET "/favicon.ico" for 127.0.0.1 at 2025-09-27 17:29:59 -0600
  
ActionController::RoutingError (No route matches [GET] "/favicon.ico"):
  
Started GET "/" for 127.0.0.1 at 2025-09-27 17:29:59 -0600
Processing by HomeController#index as HTML
  Rendering layout layouts/application.html.erb
  Rendering home/index.html.erb within layouts/application
  Rendered home/index.html.erb within layouts/application (Duration: 0.1ms | GC: 0.0ms)
  Rendered layout layouts/application.html.erb (Duration: 0.7ms | GC: 0.0ms)
Completed 200 OK in 1ms (Views: 1.0ms | ActiveRecord: 0.0ms (0 queries, 0 cached) | GC: 0.0ms)


Started GET "/stylesheets/application.css" for 127.0.0.1 at 2025-09-27 17:29:59 -0600
  
ActionController::RoutingError (No route matches [GET] "/stylesheets/application.css"):
  
Started GET "/favicon.ico" for 127.0.0.1 at 2025-09-27 17:29:59 -0600
  
ActionController::RoutingError (No route matches [GET] "/favicon.ico"):
  
  Rendered layout layouts/application.html.erb (Duration: 7.7ms | GC: 2.3ms)
Completed 200 OK in 15ms (Views: 10.1ms | ActiveRecord: 0.0ms (0 queries, 0 cached) | GC: 2.5ms)


Started GET "/stylesheets/homepage.css" for 127.0.0.1 at 2025-09-27 17:24:54 -0600
  
ActionController::RoutingError (No route matches [GET] "/stylesheets/homepage.css"):
  
clear
^C- Gracefully stopping, waiting for requests to finish
=== puma shutdown: 2025-09-27 17:25:51 -0600 ===
- Goodbye!
Exiting
carriesnow@Mac carrie-rails-workspace % clear
carriesnow@Mac carrie-rails-workspace % bin/rails server
=> Booting Puma
=> Rails 8.0.3 application starting in development 
=> Run `bin/rails server --help` for more startup options
Puma starting in single mode...
* Puma version: 7.0.4 ("Romantic Warrior")
* Ruby version: ruby 3.3.4 (2024-07-09 revision be1089c8ec) [arm64-darwin25]
*  Min threads: 3
*  Max threads: 3
*  Environment: development
*          PID: 44391
* Listening on http://127.0.0.1:3000
// ...existing code...
Started GET "/" for 127.0.0.1 at 2025-09-27 17:29:59 -0600
Processing by HomeController#index as HTML
  Rendering layout layouts/application.html.erb
  Rendering home/index.html.erb within layouts/application
  Rendered home/index.html.erb within layouts/application (Duration: 0.1ms | GC: 0.0ms)
  Rendered layout layouts/application.html.erb (Duration: 0.7ms | GC: 0.0ms)
Completed 200 OK in 1ms (Views: 1.0ms | ActiveRecord: 0.0ms (0 queries, 0 cached) | GC: 0.0ms)


Started GET "/stylesheets/application.css" for 127.0.0.1 at 2025-09-27 17:29:59 -0600
  
ActionController::RoutingError (No route matches [GET] "/stylesheets/application.css"):
  
Started GET "/favicon.ico" for 127.0.0.1 at 2025-09-27 17:29:59 -0600
  
ActionController::RoutingError (No route matches [GET] "/favicon.ico"):
  
