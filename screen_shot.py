import pyautogui
import datetime

def tomar_pantallazo():
    # Obtener la fecha y hora actual para el nombre del archivo
    ahora = datetime.datetime.now().strftime("%Y-%m-%d")
    nombre_archivo = f"pantallazo_{ahora}.png"
    
    # Tomar el pantallazo
    pantallazo = pyautogui.screenshot()
    
    # Guardar el pantallazo
    pantallazo.save(nombre_archivo)
    print(f"Pantallazo guardado como {nombre_archivo}")

# Llamar a la función para tomar el pantallazo
tomar_pantallazo()

