import { type NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value, options }) => {
                        request.cookies.set(name, value);
                    });
                    response = NextResponse.next({
                        request,
                    });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        response.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // Sprawdzamy sesję użytkownika
    const {
        data: { user },
    } = await supabase.auth.getUser();

    // OCHRONA TRAS:
    // Jeśli użytkownik wchodzi na ścieżkę zaczynającą się od "/admin"
    if (request.nextUrl.pathname.startsWith("/admin")) {

        // Wyjątek: Strona logowania jest dostępna dla każdego
        if (request.nextUrl.pathname === "/admin/login") {
            // Jeśli jest już zalogowany, a wchodzi na login -> wyślij go do panelu
            if (user) {
                return NextResponse.redirect(new URL("/admin/add", request.url));
            }
            return response;
        }

        // Blokada: Jeśli NIE ma usera -> wyślij do logowania
        if (!user) {
            return NextResponse.redirect(new URL("/admin/login", request.url));
        }
    }

    return response;
}

// Konfiguracja - na jakich ścieżkach ma działać middleware
export const config = {
    matcher: [
        "/admin/:path*", // Chroni wszystko w folderze admin
        // Poniższe to standardowe wykluczenia Next.js (pliki statyczne, obrazki itp.)
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};