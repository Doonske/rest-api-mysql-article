### Installationsanleitung: (genauere Beschreibung in der Dokumentation)

# Primäre Methode über Docker:
- Installieren Sie Docker (Desktop) von der offiziellen Docker-Website (https://www.docker.com/products/docker-desktop/)  
- Starten Sie Docker Desktop. 
- Navigieren Sie in einem Terminal in den Projekt-Ordner und dann in den “Datenbank” Ordner. 
- Führen Sie folgenden Befehl aus: docker-compose up 
Dadurch werden durch die docker-compose.yml Datei die Docker Container erstellt. 
Nachdem dieser Vorgang abgeschlossen ist und die beiden Container installiert und gestartet sind, öffnen Sie http://localhost:8080. Nun sollte die Oberfläche von “phpmyadmin” zu sehen sein. 
- Geben Sie als Benutzer: root ein und lassen Sie das Passwort leer. 
- Nach der Anmeldung klicken Sie links auf die Datenbank “testdaten” und danach im Menü oben auf “Importieren” und nun auf “Durchsuchen”.
- Navigieren Sie in den Projekt- und dann in den “Datenbank”-Ordner. Dort befindet sich eine “entries.sql” Datei, die Sie auswählen. 
- Innerhalb der Datenbank “testdaten” gibt es nun die Tabelle “entries” die mit Standardwerten gefüllt ist. 
- Wenn alles funktioniert, können Sie zum Punkt “Installation des Projekts” fortfahren. Falls nicht ist nachfolgende die Methode mit XAMPP beschrieben. 

# Projekt Installation:
(In dem Projekt wurde die Version v16.17.1 und npm in der Version 8.15.0 verwendet.)
Backend:
- Navigieren Sie im Terminal im Projekt-Ordner in das Verzeichnis:  \rest-api-mysql-article\Server 
- Führen Sie den Befehl "npm install" aus
- Nun können Sie das Backend mit dem Befehl: "node index.js" starten
Frontend:
- Navigieren Sie in einem neuen Terminal im Projekt-Ordner in das Verzeichnis:  \rest-api-mysql-article\Client
- Führen Sie den Befehl "npm install" aus
- Nun können Sie das Frontend mit dem Befehl: "npm start" starten
_________________________________________________________________________________________________________________________________________

# Backup Methode über XAMPP

- Installieren Sie XAMPP auf Ihrem Computer. Falls Sie das Programm bereits installiert haben, können Sie zu Schritt 2 übergehen. 
XAMPP ist eine kostenlose Open-Source-Software, die Apache, MySQL und PHP enthält und auf verschiedenen Betriebssystemen wie Windows, Mac und Linux installiert werden kann. Gehen Sie auf die offizielle XAMPP-Website (https://www.apachefriends.org/download.html) und laden die passende Version für Ihr Betriebssystem herunter. Folgen Sie den Anweisungen, um die Installation abzuschließen.  

- Starten Sie den Apache- und MySQL-Server von XAMPP. Öffnen Sie das XAMPP Control Panel und klicke auf die Schaltfläche "Start" neben Apache und MySQL. Dadurch werden die Server gestartet.  

# Datenbank 

- Stellen Sie sicher, dass der MySQL-Server in XAMPP gestartet ist.  
- Öffnen Sie phpMyAdmin, indem Sie in Ihrem Webbrowser zur URL "http://localhost/phpmyadmin/" navigieren. 
- Klicken Sie auf die Schaltfläche "Neue Datenbank" in der linken Navigationsleiste von phpMyAdmin und geben Sie einen Namen für die neue Datenbank ein. Die Datenbank unseres Projekts hat den Namen “testdaten". Vergeben Sie den gleichen Namen für die Datenbank.  
- Klicken Sie auf die neu erstellte Datenbank in der linken Navigationsleiste, um sie auszuwählen. 
- Klicken Sie auf die Schaltfläche "Importieren" in der oberen Menüleiste von phpMyAdmin. 
- Klicken Sie auf die Schaltfläche "Datei auswählen" und wählen Sie die SQL-Datei aus, die die Datenbank enthält, die Sie importieren möchten. Die Datei ist in dem heruntergeladenen Ordner unseres Projekts enthalten und hat den Namen „entries.sql“.  
- Klicken Sie auf die Schaltfläche "OK", um den Importvorgang zu starten. 
- Warten Sie, bis der Importvorgang abgeschlossen ist, und überprüfen Sie, ob alle Datenbanktabellen korrekt importiert wurden. 

# Projekt Installation

    Speichern Sie den entpackten Ordner unsers Projekts in dem Verzeichnis \xampp\htdocs\ auf Ihrem Rechner ab. (nur wenn Sie XAMPP installiert haben, ansonsten ist der Speicherort Ihnen überlassen) 

    Stellen Sie sicher, dass Sie NodeJS auf Ihrem Computer installiert haben. In dem Projekt wurde die Version v16.17.1 und npm in der Version 8.15.0 verwendet.  

    Öffnen Sie den Ordner in der von Ihnen bevorzugten IDE und öffnen Sie ein Terminal-Fenster und wechseln Sie in das Verzeichnis:  \rest-api-mysql-article\Server 
    In diesem Verzeichnis wird das Backend gestartet.  

    Installieren Sie die erforderlichen Module für das Backend des Projekts. Geben Sie dafür den Befehl "npm install" ein und drücken die Eingabetaste. Dadurch werden alle erforderlichen Module für das Projekt installiert.  
    Anschließend können Sie das Backend mit dem Befehl: node .\index.js  
    starten. 

    Nun starten wir das React-Frontend. Öffnen Sie dafür ein neues Terminalfenster und wechseln Sie in das Verzeichnis: \rest-api-mysql-article\Client 

    Geben Sie hier ebenfalls den Befehl "npm install" ein und drücken die Eingabetaste. Dadurch werden alle erforderlichen Module für das Frontend installiert.  
    Geben Sie nun den Befehl "npm start" ein und drücken die Eingabetaste. Anschließend öffnet sich automatisch ein Browser Tab mit unserer Anwendung. Viel Spaß beim Testen! 