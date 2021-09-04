package cf.mindaugas;

import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

import static spark.Spark.*;

public class MiniBackend {

    public static List<String> users = new ArrayList<>();

    public static void main(String[] args) {
        // home page
        get("/hello", (req, res) -> {
            System.out.println(req.headers("User-Agent"));
            return "<h1>Hello World</h1>";
        });

        // display form
        get("/form", (req, res) -> {
            String htmlFile = "target\\classes\\01_html\\sparkform\\index.html";
            return Files.readString(Paths.get(htmlFile));
        });

        // handle form
        post("/form-handler", (req, res) -> {
            String[] userInfo = req.body().split("&");
            String username = "";
            for (String userProp : userInfo) {
                if ((userProp.split("="))[0].equals("username")) {
                    username = userProp.split("=")[1];
                }
            }
            users.add(username);
            System.out.println(URLDecoder.decode(req.body(), StandardCharsets.UTF_8));
            return URLDecoder.decode(req.body(), StandardCharsets.UTF_8);
        });

        get("/users", (req, res) -> {
            return users;
        });
    }
}
