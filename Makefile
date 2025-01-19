.PHONY: serve

serve:
	@echo "Serving on http://localhost:8000"
	pnpm dev & php artisan serve
