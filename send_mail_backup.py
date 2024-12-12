import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders

def enviar_correo(con_adjunto):
    # Configuración del servidor SMTP de Gmail
    servidor_smtp = 'smtp.gmail.com'
    puerto_smtp = 587
    usuario = 'ivan.forero@progasur.com.co'
    contraseña = 'Universo2028*'

    # Crear el objeto del mensaje
    mensaje = MIMEMultipart()
    mensaje['From'] = usuario
    mensaje['To'] = 'ivan.forero@progasur.com.co'
    mensaje['Subject'] = 'Asunto del correo'

    # Cuerpo del mensaje
    cuerpo = 'Este es el cuerpo del correo.'
    mensaje.attach(MIMEText(cuerpo, 'plain'))

    # Adjuntar archivo
    nombre_archivo = '//192.168.10.10/bk-pgr/TIC/Soporte/Antivirus.txt'
    adjunto = open(nombre_archivo, 'rb')

    parte = MIMEBase('application', 'octet-stream')
    parte.set_payload(adjunto.read())
    encoders.encode_base64(parte)
    parte.add_header('Content-Disposition', f'attachment; filename={nombre_archivo.split("/")[-1]}')

    mensaje.attach(parte)

    # Conectar al servidor y enviar el correo
    try:
        servidor = smtplib.SMTP(servidor_smtp, puerto_smtp)
        servidor.starttls()
        servidor.login(usuario, contraseña)
        texto = mensaje.as_string()
        servidor.sendmail(usuario, 'ivan.forero@progasur.com.co', texto)
        servidor.quit()
        print("Correo enviado exitosamente")
    except Exception as e:
        print(f"Error al enviar el correo: {e}")

# Llamar a la función para enviar el correo
enviar_correo(True)
